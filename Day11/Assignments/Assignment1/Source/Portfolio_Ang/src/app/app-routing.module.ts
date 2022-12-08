import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ConnectComponent } from './connect/connect.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'education', component: EducationComponent },
{ path: 'work-experience', component: WorkExperienceComponent },
{ path: 'project', component: ProjectComponent },
{ path: 'skill', component: SkillComponent},
{ path: 'certificate', component: CertificateComponent },
{ path: 'connect', component: ConnectComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
