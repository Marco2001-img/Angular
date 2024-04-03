import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { CounterModule } from "../counter/counter.module";

NgModule({
    declarations:[
        HeroComponent,
        ListComponent,
    ],
    exports:[
        HeroComponent,
        ListComponent,
    ],
    imports:[
        CommonModule,
        CounterModule

    ]
})

export class HeroesModules{}