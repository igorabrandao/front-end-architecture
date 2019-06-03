import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class ErrorDialogService {

    public isDialogOpen: Boolean = false;

    // Notification settings
    private notificationSettings = {
        title: '',
        message: '',
        type: '',
        codeStatus: 0
    };

    constructor() { }

    /**
     * Function to handle the error message
     * 
     * @param err 
     */
    handleError(err): any {
        // Identify the error code status
        switch (err.status) {
            case 401: // Authentication failed.
                this.notificationSettings.title = 'Falha de autenticação';
                this.notificationSettings.message = 'O acesso à este recurso foi bloqueado porque ' +
                    'seu usuário não pôde ser autenticado. Caso acredite que isso um engano, entre em ' +
                    'contato conosco.';
                this.notificationSettings.type = 'error';
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
        this.openDialog();
    }

    /**
     * Function to display the error alert using the sweet alert component
     */
    openDialog(): any {
        swal({
            title: this.notificationSettings.codeStatus + ' - ' + this.notificationSettings.title,
            text: `Mensagem: ${this.notificationSettings.message}`,
            type: 'error',
            confirmButtonText: 'Ok',
            allowOutsideClick: true
        }).catch(swal.noop);
    }
}
