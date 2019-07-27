import { Menu, X } from 'react-feather';

const DefaultLayout = ({ children, ...props }) => {
  return (
    <div class="wrap">
      <div class="side">
        <div class="taskbar">
          <X />
        </div>
        <div class="content">
          {props.sidebarContent}
        </div>
      </div>
      <div class="main">
        <div class="hero">
          <div class="taskbar">
            <Menu />
          </div>
          <h1>{props.heading}</h1>
        </div>
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
