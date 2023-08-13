/*
    Dependency-inversion means that an object should not directly depend on the lower-level implementations
    by using a 'wrapper' class acting us bridge so that our class would just depend on that 'wrapper' class and 
    do not need to worry on how the low-level stuffs works because the 'wrapper' class is the one handling
    all of it. 

    It's easier to understand it with an example.

    In this example, the 'Store' class does not directly depend on Stripe or Paypal. It just uses their respective payment processor
    namely 'StripePaymentProcessor' and 'PaypalPaymentProcessor' which acts us the 'wrapper' hence, we just need to pass in these
    payment processors when instantiating a 'Store' class. The 'Store' class does not need to worry if there are changes in Paypal or
    Stripes API because it is being handled by their respective payment processors.
*/

class Store {
    constructor(PaymentProcessor) {
        this.paymentProcessor = PaymentProcessor;
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity);
    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(15 * quantity);
    }
}


class Stripe {
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made payment of $${amountInCents / 100} with Stripe`);
    }
}

class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user);
    }

    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars * 100);
    }
}


class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $${amountInDollars} with Paypal`)
    }
}

class PaypalPaymentprocessor {
    constructor(user) {
        this.user = user;
        this.paypal = new Paypal();
    }

    pay(amountInDollars) {
        this.paypal.makePayment(user, amountInDollars);
    }
}

const store = new Store(new StripePaymentProcessor("John"));
store.purchaseBike(2);
store.purchaseHelmet(3);