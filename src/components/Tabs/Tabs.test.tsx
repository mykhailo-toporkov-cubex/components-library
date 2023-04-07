import { fireEvent, render, screen } from '@testing-library/react';
import { Tabs, TabProps } from '.';

const list: TabProps[] = [
  {
    name: 'Інформація про проект',
    value: 'test value 1',
  },
  {
    name: 'Підбір позицій',
    value: 'test value 2',
  },
  {
    name: 'Комерційна пропозиція',
    value: 'test value 3',
  },
];

describe('Tabs component tests', () => {
  it(`should render a Tabs component with buttons and tabs`, () => {
    render(<Tabs tabsList={list} />);
    const buttons = screen.getAllByRole('tab');
    const tab = screen.getByRole('tabpanel');
    expect(buttons.length).toEqual(3);
    expect(tab).toBeInTheDocument();
  });

  it(`should render a Tabs component with first tab active by default`, () => {
    render(<Tabs tabsList={list} />);
    const buttons = screen.getAllByRole('tab');
    const tab = screen.getByRole('tabpanel');
    expect(buttons[0]).toHaveAttribute('aria-selected', 'true');
    expect(tab).toBeInTheDocument();
  });

  it(`should render a Tabs component with default tab`, () => {
    render(<Tabs tabsList={list} defaultTab={list[1]} />);
    const buttons = screen.getAllByRole('tab');
    const tab = screen.getByRole('tabpanel');
    expect(buttons[1]).toHaveAttribute('aria-selected', 'true');
    expect(tab).toHaveTextContent('test value 2');
  });

  it(`should change tab on click`, () => {
    render(<Tabs tabsList={list} />);
    const [button1, button2, button3] = screen.getAllByRole('tab');
    expect(screen.getByRole('tabpanel')).toHaveTextContent('test value 1');
    fireEvent.click(button2);
    expect(screen.getByRole('tabpanel')).toHaveTextContent('test value 2');
    fireEvent.click(button3);
    expect(screen.getByRole('tabpanel')).toHaveTextContent('test value 3');
    fireEvent.click(button1);
    expect(screen.getByRole('tabpanel')).toHaveTextContent('test value 1');
  });
});
