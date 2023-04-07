import { fireEvent, render, screen } from '@testing-library/react';
import { ToastNotification } from '.';


describe('ToastNotification component tests', () => {
  it(`should render a ToastNotification component with title, message and without buttons`, () => {
    render(
      <ToastNotification
        title="Test title"
        message="Test message"
      />
    );
    const button = screen.queryByRole('button');
    const title = screen.getByText('Test title');
    const message = screen.getByText('Test message');
    expect(button).not.toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });

  it(`should render a ToastNotification component with close button`, () => {
    const handler = jest.fn();
    render(
      <ToastNotification
        title="Test title"
        message="Test message"
        closeButtonHandler={handler}
      />
    );
    const button = screen.queryByRole('closebutton')!;
    expect(button).toBeInTheDocument();
    fireEvent.click(button)
    expect(handler).toHaveBeenCalledTimes(1);
    fireEvent.click(button)
    fireEvent.click(button)
    expect(handler).toHaveBeenCalledTimes(3);
  });

  it(`should render a ToastNotification component with action & close buttons`, () => {
    const handlerClose = jest.fn();
    const handlerAction = jest.fn();
    render(
      <ToastNotification
        title="Test title"
        message="Test message"
        actionButtontext='Accept'
        actionButtonHandler={handlerAction}
        closeButtonHandler={handlerClose}
      />
    );
    const actionButton = screen.getByRole('button', {name: 'Accept'});
    const closeButton = screen.queryByRole('closebutton')!;
    expect(actionButton).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton)
    expect(handlerClose).toHaveBeenCalledTimes(1);
    fireEvent.click(actionButton)
    fireEvent.click(actionButton)
    expect(handlerAction).toHaveBeenCalledTimes(2);
  });
});