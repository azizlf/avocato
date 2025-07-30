import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements AfterViewInit,OnInit {

  constructor(public blogService:BlogService,private route:ActivatedRoute){}

  blog = {
    image: "",
    title: "",
    description: "",
    date: "",
  }

  ngAfterViewInit(): void {
    const container: any = document.querySelector("#headerBlogs")

    container.scrollIntoView({
      behavior: "smooth"
    })
  }

  ngOnInit(): void {

    this.blog = this.blogService.blogs.filter((e:any) => e.id === this.route.snapshot.params["id"])[0]
    
  }

}
