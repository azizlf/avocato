import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements AfterViewInit {

  constructor(public blogService: BlogService) { }


  ngAfterViewInit(): void {

    const container: any = document.querySelector("#headerBlogs")

    container.scrollIntoView({
      behavior: "smooth"
    })

  }

}
