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

  moveAlongSliderRight(event: MouseEvent) {
    this.determineMoveAmountRight()

    this.percentage_string.set("translateX(" + this.percentage_value().toString() + "%)")
    console.log(this.percentage_string())

  }

  moveAlongSliderLeft(event: MouseEvent) {
    this.determineMoveAmountLeft()

    this.percentage_string.set("translateX(" + this.percentage_value().toString() + "%)")
    console.log(this.percentage_string())
  }

  determineMoveAmountRight() {
    let maxTransformXValue = (ITEM_COUNT / ITEMS_DISPLAYED * 100) // full length of slider

    if (this.percentage_value() + 100 < maxTransformXValue) {
      this.percentage_value.set(-maxTransformXValue + 100) //we want to display up to the final slider element
    } else {
      this.percentage_value.set(this.percentage_value() - 100)
    }
    
  }

  determineMoveAmountLeft() {
    if (this.percentage_value() < 100) {
      this.percentage_value.set(0)
    } else {
      this.percentage_value.set(this.percentage_value() + 100)
    }
  }
}
