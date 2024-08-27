import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UsersBackendService} from "../service/Users-backend.service";

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html'
})
export class AdminViewComponent implements OnInit {

  constructor(private router: Router,  private backend: UsersBackendService,) {
  }
  ngOnInit(): void {
  }
  public  getAllUsers(){
    this.backend.getAllUsers().subscribe(
    )}

}
