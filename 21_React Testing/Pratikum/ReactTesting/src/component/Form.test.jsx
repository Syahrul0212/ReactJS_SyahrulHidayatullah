import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from './Form';
import { Provider } from "react-redux";
import store from '../confiq/store';
import { BrowserRouter as Router } from "react-router-dom";
import { it } from 'vitest';

describe("Form", () => {
    it("should render product name input and display entered text", () => {
      render(
        <Router>
          <Provider store={store}>
            <Form/>
          </Provider>
        </Router>
      );
      const productNameInput = screen.getByTestId("nameTest");
      const productName = "pname";
      fireEvent.change(productNameInput, { target: { value: productName } });
      expect(screen.getByTestId("nameTest").value).toBe(productName);
      const productNameDisplay = screen.getByTestId("nameTest");
      expect(productNameDisplay).toBeInTheDocument();
    });
    it("should render form and display selected option", () => {
        render(
          <Router>
            <Provider store={store}>
              <Form/>
            </Provider>
          </Router>
        );
        const categorySelect = screen.getByTestId("categoryTest");
        const categoryOption = "Very New";
        fireEvent.change(categorySelect, { target: { value: categoryOption } });
        expect(categorySelect.value).toBe(categoryOption);
        const categoryDisplay = screen.getByText(categoryOption);
        expect(categoryDisplay).toBeInTheDocument();
      });
})

it("should show error message when Product Name is empty", async () => {
    render(
      <Router>
        <Provider store={store}>
          <Content_Form />
        </Provider>
      </Router>
    );
    const submitButton = screen.getByText("Create Product");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText("Product Name is required")).toBeInTheDocument();
    });
  });
  
  it("should show error message when Product Name contains invalid characters", async () => {
    render(
      <Router>
        <Provider store={store}>
          <Form/>
        </Provider>
      </Router>
    );
    const productNameInput = screen.getByTestId("nameTest");
    fireEvent.change(productNameInput, { target: { value: `~!@#$%^&*` } });
    await waitFor(() => {
      expect(
        screen.getByText("Name must not contain symbols")
      ).toBeInTheDocument();
    });
  });
  
  it("should show error message when Product Name exceeds 25 characters", async () => {
    render(
      <Router>
        <Provider store={store}>
          <Form/>
        </Provider>
      </Router>
    );
    const productNameInput = screen.getByTestId("nameTest");
    fireEvent.change(productNameInput, { target: { value: "A".repeat(26) } });
    const submitButton = screen.getByTestId("bttn");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(
        screen.getByText("Product Name must not exceed 25 characters")
      ).toBeInTheDocument();
    });
  });
  