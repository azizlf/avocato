import { Component, OnInit } from '@angular/core';
import { Database, ref, get, child } from '@angular/fire/database';
import { BlogService } from './service/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private db: Database, private blogService: BlogService) { }
  
  async getBlogs() {
    const dbRef = ref(this.db);
    const snapshot = await get(child(dbRef, 'blogs'));

    if (snapshot.exists()) {
      const data = snapshot.val();
      this.blogService.blogs = Object.keys(data).map(key => ({
        id: key,
        image: data[key].image,
        title: data[key].title,
        description: data[key].description,
        date: data[key].date
      }));

      console.log(this.blogService.blogs)

    } else {
      console.log("No data available");
      this.blogService.blogs = [];
    }
  }

  ngOnInit(): void {
    this.getBlogs()
  }

}
