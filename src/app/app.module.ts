import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { TechnologyConsultingComponent } from './Consulting-Services/technology-consulting/technology-consulting.component';
import { UserExperienceConsultingComponent } from './Consulting-Services//user-experience-consulting/user-experience-consulting.component';
import { BrandingConsultingComponent } from './Consulting-Services/branding-consulting/branding-consulting.component';
import { StartupConsultingComponent } from './Consulting-Services/startup-consulting/startup-consulting.component';
import { CxoAdvisoryConsultingComponent } from './Consulting-Services/cxo-advisory-consulting/cxo-advisory-consulting.component';
import { EngagementModelsComponent } from './engagement-models/engagement-models.component';
import { WorkshopsSeminarsComponent } from './workshops-seminars/workshops-seminars.component';
import { KnowledgeVaultComponent } from './knowledge-vault/knowledge-vault.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErpConsultingComponent } from './Consulting-Services/erp-consulting/erp-consulting.component';
import { HomeSliderComponent } from './sliders/home-slider/home-slider.component';
import { MdfComponent } from './mdf/mdf.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    TechnologyConsultingComponent,
    UserExperienceConsultingComponent,
    BrandingConsultingComponent,
    StartupConsultingComponent,
    CxoAdvisoryConsultingComponent,
    ErpConsultingComponent,
    EngagementModelsComponent,
    WorkshopsSeminarsComponent,
    KnowledgeVaultComponent,
    ContactUsComponent,
    HomeSliderComponent,
    MdfComponent,
    FooterComponent,
    PageNotFoundComponent,
    
   
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent
      },
      {
        path: 'About',component: AboutComponent
      },
      {
        path: 'Engagement',component: EngagementModelsComponent
      },
      {
        path: 'workshop',component: WorkshopsSeminarsComponent
      },
      {
        path: 'KnowledgeVault',component: KnowledgeVaultComponent
      },
      {
        path: 'ContactUs',component: ContactUsComponent
      },
      { path: '**', component: PageNotFoundComponent }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
