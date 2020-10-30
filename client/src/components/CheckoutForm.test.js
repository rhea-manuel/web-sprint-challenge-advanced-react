import React from "react";
import { render, fireEvent, waitFor, screen, getNodeText, getByText, getByTestId, wait } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const button = screen.getByText('Checkout')

    fireEvent.click(button)
    const success = screen.getByTestId("successMessage")
});
