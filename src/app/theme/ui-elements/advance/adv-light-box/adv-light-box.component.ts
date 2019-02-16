import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IAlbum, IEvent, Lightbox, LIGHTBOX_EVENT, LightboxConfig, LightboxEvent} from 'angular2-lightbox';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-adv-light-box',
  templateUrl: './adv-light-box.component.html',
  styleUrls: [
    './adv-light-box.component.scss',
    '../../../../../../node_modules/angular2-lightbox/lightbox.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AdvLightBoxComponent implements OnInit {
  public albums: Array<IAlbum>;
  private _options: Object;
  private _subscription: Subscription;
  constructor(private _lightbox: Lightbox, private _lightboxEvent: LightboxEvent, private _lighboxConfig: LightboxConfig) {
    this.albums = [];
    this._options = {};
    for (let i = 1; i <= 10; i++) {
      const src = 'assets/images/light-box/l' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/images/light-box/sl' + i + '.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };

      this.albums.push(album);
    }

    _lighboxConfig.fadeDuration = 1;
  }

  ngOnInit() {
  }

  open(index: number): void {
    this._subscription = this._lightboxEvent.lightboxEvent$.subscribe((event: IEvent) => this._onReceivedEvent(event));

    // override the default config
    this._lightbox.open(this.albums, index, { wrapAround: true, showImageNumberLabel: true });
  }

  private _onReceivedEvent(event: IEvent): void {
    if (event.id === LIGHTBOX_EVENT.CLOSE) {
      this._subscription.unsubscribe();
    }
  }

}
