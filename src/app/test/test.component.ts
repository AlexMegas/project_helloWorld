import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

public displayName = true;

  public colors = ["red", "blue", "green", "yellow"];

  public name = "Sasha :)";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = true;

  public hasError = true;
  public isSpecial = true;
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  };

  public greeting = "";

  public messageClasses = {
    "test-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };

  public successClass = "text-success";

  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello " + this.name;
  }

  onClick(event) {
    console.log(event);
    this.greeting = event.type;
  }

}
