import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("Counter Component", () => {
  describe("Contador", () => {
    test("deve iniciar o titulo com o valor 0", () => {
      render(<Counter />);

      const counterTitle = screen.getByText("0");

      expect(counterTitle).toBeInTheDocument();
    });

    test("deve conter a classe counter__title no titulo", () => {
      render(<Counter />);

      const counterTitle = screen.getByText("0");

      expect(counterTitle).toHaveClass("counter__title");
    });

    test("não deve iniciar o titulo com as classes counter__title--increment e counter__title--decrement", () => {
      render(<Counter />);

      const counterTitle = screen.getByText("0");

      expect(counterTitle).not.toHaveClass("counter__title--increment");
      expect(counterTitle).not.toHaveClass("counter__title--decrement");
    });
  });

  describe("Botões", () => {
    test("deve conter um botão incrementar", () => {
      render(<Counter />);

      const buttonIncrementar = screen.getByTestId("button-increment");

      expect(buttonIncrementar).toBeInTheDocument();
    });

    test("botão increment deve conter duas classes button e button--increment", () => {
      render(<Counter />);

      const buttonIncrementar = screen.getByTestId("button-increment");

      expect(buttonIncrementar).toHaveClass("button");
      expect(buttonIncrementar).toHaveClass("button--increment");
    });

    test("deve conter um botão decrementar", () => {
      render(<Counter />);

      const buttonDecrement = screen.getByTestId("button-decrement");

      expect(buttonDecrement).toBeInTheDocument();
    });

    test("botão decrement deve conter duas classes button e button--decrement", () => {
      render(<Counter />);

      const buttonDecrement = screen.getByTestId("button-decrement");

      expect(buttonDecrement).toHaveClass("button");
      expect(buttonDecrement).toHaveClass("button--decrement");
    });
  });

  describe("Eventos", () => {
    test("deve incrementar +1 ao clicar no botão incrementar", () => {
      render(<Counter />);

      const buttonIncrementar = screen.getByTestId("button-increment");

      userEvent.click(buttonIncrementar);

      const counter = screen.getByTestId("titulo-counter");

      expect(counter.textContent).toEqual("1");
    });

    test("ao clicar 2x incrementar +2 ao clicar no botão incrementar", () => {
      render(<Counter />);

      const buttonIncrementar = screen.getByTestId("button-increment");

      userEvent.click(buttonIncrementar);
      userEvent.click(buttonIncrementar);

      const counter = screen.getByTestId("titulo-counter");

      expect(counter.textContent).toEqual("2");
    });

    test("ao decrementar -1 ao clicar no botão decrementar", () => {
      render(<Counter />);

      const buttonDecrementar = screen.getByTestId("button-decrement");

      userEvent.click(buttonDecrementar);

      const counter = screen.getByTestId("titulo-counter");

      expect(counter.textContent).toEqual("-1");
    });

    test("ao clicar 2x decrementar -2 ao clicar no botão decrementar", () => {
      render(<Counter />);

      const buttonDecrementar = screen.getByTestId("button-decrement");

      userEvent.click(buttonDecrementar);
      userEvent.click(buttonDecrementar);

      const counter = screen.getByTestId("titulo-counter");

      expect(counter.textContent).toEqual("-2");
    });
  });

  describe("Visual pós Eventos", () => {
    test("ao clicar no botão incrementar o titulo deve conter duas classes counter__title e counter__title--increment", () => {
      render(<Counter />);

      const buttonIncrementar = screen.getByTestId("button-increment");

      userEvent.click(buttonIncrementar);

      const counter = screen.getByTestId("titulo-counter");

      expect(counter).toHaveClass("counter__title");
      expect(counter).toHaveClass("counter__title--increment");
    });

    test("ao clicar no botão decrementar o titulo deve conter duas classes counter__title e counter__title--decrement", () => {
      render(<Counter />);

      const buttonDecrement = screen.getByTestId("button-decrement");
      userEvent.click(buttonDecrement);

      const counter = screen.getByTestId("titulo-counter");

      expect(counter).toHaveClass("counter__title");
      expect(counter).toHaveClass("counter__title--decrement");
    });
  });
});
