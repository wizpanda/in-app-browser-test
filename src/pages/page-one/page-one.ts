import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {InAppBrowser, InAppBrowserEvent, InAppBrowserObject} from "@ionic-native/in-app-browser";
import {PageTwoPage} from "../page-two/page-two";

/**
 * Generated class for the PageOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-page-one',
    templateUrl: 'page-one.html',
})
export class PageOnePage {

    private browser: InAppBrowserObject;
    private lastLoadedURL: string;

    constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PageOnePage');
    }

    openInAppBrowser() {
        this.browser = this.inAppBrowser.create("https://google.com", "_blank", {
            hardwareback: 'no',
            location: 'no',
            toolbar: 'yes'
        });

        this.browserOnLoadStart();
        this.browserOnExit();
    }

    private browserOnLoadStart() {
        this.browser.on('loadstart').subscribe((event: InAppBrowserEvent) => {

            if (event && event.url) {
                this.lastLoadedURL = event.url;
                if (this.lastLoadedURL.includes('facebook.com')) {
                    this.browser.close();
                }
            }
        });
    }

    private browserOnExit() {
        this.browser.on('exit').subscribe(() => {

            if (this.lastLoadedURL.includes('facebook.com')) {
                this.goToPageTwo();
            }
        });
    }

    private goToPageTwo() {
        this.navCtrl.setRoot(PageTwoPage);
    }


}
