import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { PodcastComponent } from './podcast.component';
import { FeedComponent } from './pages/feed/feed.component';
import { CategoryComponent } from './pages/category/category.component';
import { HistoryComponent } from './pages/history/history.component';
import { SubscribesComponent } from './pages/subscribes/subscribes.component';
import { AuthGuard } from 'app/Auth_1/shared/guard/auth.guard';

const routes: Routes = [
  {
    path: 'podcast', component: PodcastComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'feed/:id', component: FeedComponent, canActivate: [AuthGuard] },
      { path: 'category/:id/:name', component: CategoryComponent, canActivate: [AuthGuard] },
      { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
      { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
      { path: 'subscribes', component: SubscribesComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodcastRoutingModule { }
