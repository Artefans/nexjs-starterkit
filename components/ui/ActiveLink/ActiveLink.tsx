import React from 'react';
import Link, { LinkProps } from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  activeClassName: string
  children: React.ReactElement
}

const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  ...props
}) => {
  const router = useRouter();
  const child: React.PropsWithChildren<any> = React.Children.only(children);

  let className = child.props.className || '';

  if (router.asPath === props.href || !props?.href) {
    className = classNames([className, props.activeClassName]);

    return <span className={className}>{child.props.children}</span>;
  }

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
};

export default ActiveLink;
