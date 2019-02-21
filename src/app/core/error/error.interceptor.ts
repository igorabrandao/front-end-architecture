import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Import the auth service
import { AuthenticationService } from '../services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    // Notification settings
    private notificationSettings = {
        title: '',
        message: '',
        type: '',
        codeStatus: 0
    };

    /**
     * Class constructor
     * 
     * @param authService 
     * @param notificationComponent 
     */
    constructor(private authService: AuthenticationService) { }

    /**
     * Error interceptor handler
     * 
     * @param request 
     * @param next 
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            // Identify the error code status
            switch (err.status) {
                case 401: // Authentication failed.
                    this.notificationSettings.title = 'Falha de autenticação';
                    this.notificationSettings.message = 'O acesso à este recurso foi bloqueado porque ' +
                        'seu usuário não pôde ser autenticado. Caso acredite que isso um engano, entre em ' +
                        'contato conosco.';
                    this.notificationSettings.type = 'error';

                    // auto logout if 401 response returned from API
                    this.authService.logout();
                    location.reload(true);

                    break;
                case 403: // The authenticated user is not allowed to access the specified API endpoint.
                    this.notificationSettings.title = 'Falha de autorização';
                    this.notificationSettings.message = 'Seu usuário não está autorizado a realizar esta ação.';
                    this.notificationSettings.type = 'error';
                    break;
                case 404: // The application not found the object from API endpoint.
                    this.notificationSettings.title = 'Não encontrado';
                    this.notificationSettings.message = 'A informação solicitada não existe ou não foi encontrada.';
                    this.notificationSettings.type = 'error';
                    break;
                case 422: // Data validation failed (in response to a POST request, for example). Please check the response body for detailed error messages.
                    this.notificationSettings.title = 'Falha na validação dos dados';
                    this.notificationSettings.message = 'Mensagem do sistema: ' + (err.error.message || err.statusText);
                    this.notificationSettings.type = 'error';
                    break;
                case 405: // Method not allowed. Please check the Allow header for the allowed HTTP methods.
                    this.notificationSettings.title = 'Método não permitido';
                    this.notificationSettings.message = 'O método executado na API não é permitido. Acesse ' +
                        'o cabeçalho da requisição para verificar quais métodos HTTP são permitidos.';
                    this.notificationSettings.type = 'error';
                    break;
                case 415: // Unsupported media type. The requested content type or version number is invalid.
                    this.notificationSettings.title = 'Formato de mídia não suportado';
                    this.notificationSettings.message = 'O formato da mídia enviado não é suportado ou é inválido.';
                    this.notificationSettings.type = 'error';
                    break;
                case 429: // Too many requests. The request was rejected due to rate limiting.
                    this.notificationSettings.title = 'Sobrecarga de requisições';
                    this.notificationSettings.message = 'A sua requisição foi rejeitada devido ao limite de ' +
                        'processamento de requisições ter sido atingido. Aguarde alguns instantes e tente novamente.';
                    this.notificationSettings.type = 'error';
                    break;
                case 500: // Internal server error. This could be caused by internal program errors.
                    this.notificationSettings.title = 'Ocorreu um erro em sua requisição';
                    this.notificationSettings.message = 'Ocorreu um problema com o processamento de sua requisição. ' +
                        'Por favor, tente novamente ou entre em contato conosco.';
                    this.notificationSettings.type = 'error';
                    break;
            }

            // Set the error code status
            this.notificationSettings.codeStatus = err.status;

            // Display the message to the user
            this.showMessage();

            // Throws the error
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }

    /**
     * Method to display the error message
     * Calls the Toast UI component
     */
    private showMessage() {
        // Run the notification
        /*this.notificationComponent.addToast({
            title: this.notificationSettings.codeStatus + ' - ' + this.notificationSettings.title,
            msg: `{Mensagem: ${this.notificationSettings.message}"}`,
            timeout: 10000,
            theme: 'bootstrap',
            position: 'top-right',
            type: this.notificationSettings.type
        })*/
    }
}