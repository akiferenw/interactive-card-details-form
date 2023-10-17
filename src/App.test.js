import { render, screen } from '@testing-library/react';
import App from './src/App.js'; // Dosya yolunu app.js dosyasının konumuna uygun olarak güncelleyin.


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
