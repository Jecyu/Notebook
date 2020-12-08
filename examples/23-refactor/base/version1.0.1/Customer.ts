/*
 * @Author: Jecyu
 * @Date: 2020-11-17 10:24:12
 * @LastEditors: Jecyu
 * @LastEditTime: 2020-12-04 19:05:46
 * @FilePath: /examples/23-refactor/base/version2/src/Customer.ts
 * @Description:
 */

import Movie from "./Movie";
import Rental from "./Rental";

interface Enumeration {
  hasMoreElements: (current: number) => boolean;
  nextElements: (next: number) => any;
}
// class Rentals implements Enumeration {
class Rentals {
  private _rentals: Array<Rental> = [];
  addElement(arg: Rental) {
    this._rentals.push(arg);
  }
  elements(): Rental[] {
    return this._rentals;
  }

  // hasMoreElements(current: number) {
  //   const hasMoreElements = this._rentals[current] ? true : false;
  //   return hasMoreElements;
  // }

  // nextElements(next: number) {
  //   const element = this._rentals[next];
  //   return element;
  // }
}

class Customer {
  private _name: string;
  private _rentals: Rentals = new Rentals(); // manager rental center

  constructor(name: string) {
    this._name = name;
  }

  addRental(arg: Rental): void {
    this._rentals.addElement(arg);
  }

  getName(): string {
    return this._name;
  }
  // 对比上一个版本，提取了函数，并更改该函数变量名称 each -> aRental 和 thisAmount -> result
  private amountFor(aRental: Rental): number {
    let result: number = 0;
    switch (aRental.getMovie().getPriceCode()) {
      case Movie.REGULAR:
        result += 2;
        if (aRental.getDaysRented() > 2) {
          result += (aRental.getDaysRented() - 2) * 1.5;
        }
        break;
      case Movie.NEW_RELEASE:
        result += aRental.getDaysRented() * 3;
        break;
      case Movie.CHILDRENS:
        result += 1.5;
        if (aRental.getDaysRented() > 3) {
          result += (aRental.getDaysRented() - 3) * 1.5;
        }
        break;
    }
    return result;
  }

  // 生成详单的函数
  statement() {
    let totalAmount: number = 0; // 总金额
    let frequentRenterPoints: number = 0; // 积分
    const rentals: Rental[] = this._rentals.elements();
    let result: string = "Rental Record for " + this.getName() + "\n";
    let i = 0;
    // while (rentals.hasMoreElements(i)) {
    while (rentals.length > i) {
      let thisAmount = 0;
      // let each: Rental = rentals.nextElements(i);
      let each: Rental = rentals[i];
      i++;
      // determine amount for each line
      // refactor start
      thisAmount = this.amountFor(each);
      // refactor end

      // add frequent renter points
      frequentRenterPoints++;
      // add bonus for a two day new release rental
      if (
        each.getMovie().getPriceCode() === Movie.NEW_RELEASE &&
        each.getDaysRented() > 1
      ) {
        frequentRenterPoints++;
      }

      // show figures for this rental
      result +=
        "\t" + each.getMovie().getTitle() + "\t" + String(thisAmount) + "\n";
      totalAmount += thisAmount;
    }
    // add footer lines
    result += "Amount owed is " + String(totalAmount) + "\n";
    result +=
      "You earned " + String(frequentRenterPoints) + " frequent renter points";
    return result;
  }
}

export default Customer;
