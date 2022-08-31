import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('Verificar titulo', () => {
  render(<App />);
  const linkElement = screen.getByText(/JOGAR DADOS/i);
  expect(linkElement).toBeInTheDocument();
});

test('Verificar Imagem', () => {
  render(<App />);
  const localImg = screen.getByAltText(/img1/i);
  expect(localImg).toBeInTheDocument();
});

test('Testar click no botão', () => {
  render(<App />);
  const button = screen.getByText("JOGAR");
  fireEvent(button, new MouseEvent('click', {}));
  const modal = screen.queryByText("Clicou");
  expect(modal).not.toBeInTheDocument();
});

