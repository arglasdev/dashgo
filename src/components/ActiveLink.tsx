import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldmatchExactHref?: boolean;
}

export function ActiveLink({ children, shouldmatchExactHref, ...rest }: ActiveLinkProps) {

    let isActive = false;
    const { asPath } = useRouter();

    if (shouldmatchExactHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }

    if (!shouldmatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
        isActive = true;
    }

    return (
        <Link {...rest}>
            {cloneElement(children, { color: isActive ? 'pink.400' : 'gray.50' })}
        </Link>
    )
}