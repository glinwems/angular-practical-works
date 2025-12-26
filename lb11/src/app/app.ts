import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { ApiService, Post, User, Comment } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  posts: Post[] = [];
  users: User[] = [];
  comments: Comment[] = [];
  singlePost: Post | null = null;
  loading = false;
  error: string | null = null;

  constructor(private apiService: ApiService) {}

  loadPosts(): void {
    this.loading = true;
    this.error = null;
    this.apiService.getPosts().subscribe({
      next: (data) => {
        this.posts = data.slice(0, 5);
        this.loading = false;
        console.log('Posts loaded:', this.posts);
      },
      error: (err) => {
        this.error = 'Помилка завантаження постів';
        this.loading = false;
        console.error('Error loading posts:', err);
      }
    });
  }

  loadUsers(): void {
    this.loading = true;
    this.error = null;
    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.users = data.slice(0, 5);
        this.loading = false;
        console.log('Users loaded:', this.users);
      },
      error: (err) => {
        this.error = 'Помилка завантаження користувачів';
        this.loading = false;
        console.error('Error loading users:', err);
      }
    });
  }

  loadComments(): void {
    this.loading = true;
    this.error = null;
    this.apiService.getComments().subscribe({
      next: (data) => {
        this.comments = data.slice(0, 5);
        this.loading = false;
        console.log('Comments loaded:', this.comments);
      },
      error: (err) => {
        this.error = 'Помилка завантаження коментарів';
        this.loading = false;
        console.error('Error loading comments:', err);
      }
    });
  }

  loadSinglePost(): void {
    this.loading = true;
    this.error = null;
    this.apiService.getPostById(1).subscribe({
      next: (data) => {
        this.singlePost = data;
        this.loading = false;
        console.log('Single post loaded:', this.singlePost);
      },
      error: (err) => {
        this.error = 'Помилка завантаження поста';
        this.loading = false;
        console.error('Error loading post:', err);
      }
    });
  }

  clearData(): void {
    this.posts = [];
    this.users = [];
    this.comments = [];
    this.singlePost = null;
    this.error = null;
  }
}
