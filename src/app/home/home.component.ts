import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare function homeFn(): void

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  })

  constructor(private renderer: Renderer2, public blogService: BlogService) { }

  sendForm() {

    const name = this.form.value.name
    const email = this.form.value.email
    const tel = this.form.value.phone
    const message = this.form.value.message

    const fullMessage = `الاسم و اللقب: ${name}
    %0Aالبريد الالكتروني: ${email}
    %0Aرقم الهاتف: ${tel}
    %0Aالموضوع: ${message}`

    const phoneNumber = "+21696225134"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${fullMessage}`

    window.open(whatsappUrl, '_blank')

  }

  ngAfterViewInit(): void {
    const scripts = [
      'assets/js/modernizr-2.8.3.min.js',
      'assets/js/jquery.min.js',
      'assets/js/bootstrap.min.js',
      'assets/js/rsmenu-main.js',
      'assets/js/jquery.nav.js',
      'assets/js/owl.carousel.min.js',
      'assets/js/slick.min.js',
      'assets/js/isotope.pkgd.min.js',
      'assets/js/imagesloaded.pkgd.min.js',
      'assets/js/wow.min.js',
      'assets/js/skill.bars.jquery.js',
      'assets/js/jquery.counterup.min.js',
      'assets/js/waypoints.min.js',
      'assets/js/jquery.mb.YTPlayer.min.js',
      'assets/js/jquery.magnific-popup.min.js',
      'assets/inc/custom-slider/js/jquery.nivo.slider.js',
      'assets/js/plugins.js',
      'assets/js/contact.form.js',
      'assets/js/main.js',
    ];

    setTimeout(() => {
      for (let src of scripts) {
        const script = this.renderer.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        script.defer = true;
        this.renderer.appendChild(document.body, script);
      }
    }, 400);

    homeFn()
  }

}
