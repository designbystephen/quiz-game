import React from "react";

export type LayoutProps = {
  header?: React.JSX.Element;
  content: React.JSX.Element;
};

function Layout({ header, content }: LayoutProps) {
  return (
    <div className="bg-[#fefefe] w-screen h-screen flex flex-col">
      {Boolean(header) && <header>{header}</header>}
      <main>{content}</main>
    </div>
  );
}

export default Layout;
