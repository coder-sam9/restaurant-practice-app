import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    addedCount:0,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    addedCount:0,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    addedCount:0,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    addedCount:0,
  },
];

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((item) => {
    return <MealItem key={item.id} id={item.id} item={item} />;
  });
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
