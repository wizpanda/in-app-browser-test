import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PageOnePage} from "../page-one/page-one";
import {PageTwoPage} from "../page-two/page-two";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    goToPageOne() {
        this.navCtrl.push(PageOnePage)
    }

    goToPageTwo() {
        this.navCtrl.push(PageTwoPage)
    }
}
