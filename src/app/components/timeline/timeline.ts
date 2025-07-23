import { Component, Renderer2, signal } from '@angular/core';
import { ITEM_COUNT, ITEMS_DISPLAYED } from '../../constants';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css'
})
export class Timeline {
  percentage_string = signal('translateX(0%)')
  percentage_value = signal(0);

  moveRight(event: MouseEvent) {
    this.percentage_value.set(this.percentage_value() - this.moveAmountRight())

    this.percentage_string.set("translateX(" + this.percentage_value().toString() + "%)")
    console.log(this.percentage_string())

  }

  moveLeft(event: MouseEvent) {
    this.percentage_value.set(this.percentage_value() + this.moveAmountLeft())

    this.percentage_string.set("translateX(" + this.percentage_value().toString() + "%)")
    console.log(this.percentage_string())
  }

  moveAmountRight() : number {
    //Bruh this has to be overcomplicated.
    //Suggestion - how about we calculate what is the max percentage instead. We know how many elements we have.
    let move_percentage = 100;
    let groups_passed = Math.floor(this.percentage_value() / 100)
    let items_scrolled = ITEMS_DISPLAYED * groups_passed;
    let items_remaining = ITEM_COUNT - items_scrolled;
    if (items_remaining % ITEMS_DISPLAYED != 0) {
      move_percentage = (items_remaining % ITEMS_DISPLAYED) / ITEMS_DISPLAYED * 100
      console.log(move_percentage)
      return move_percentage;
    } else {
      return move_percentage;
    }
  }

  moveAmountLeft() : number {
    if (this.percentage_value() < 100) {
      return -this.percentage_value()
    }
    return 100;
  }
}
