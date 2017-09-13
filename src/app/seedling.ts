import { Injectable, ViewChild } from "@angular/core"

@Injectable()
export class Seedling {
    @ViewChild("bob") public bob
}