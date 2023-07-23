import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user = JSON.parse("" + localStorage.getItem("logged"));
      if(user.tip==0){
        return true;
      }
      else{
        this.toastr.warning("Nemate pravo pristupa!").onHidden.subscribe(() => {
          this.router.navigate(["login"]);
        });
        return false;
      }
  }
  
}
