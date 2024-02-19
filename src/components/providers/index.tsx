import React, { FunctionComponent } from "react";
import SessionWrapper from "./SessionWrapper";

type ProviderProps = {
  children: React.ReactNode;
};

const composeProviders =
  (...providers: FunctionComponent<ProviderProps>[]) =>
  (props: ProviderProps) =>
    providers.reduceRight(
      (children, Provider) => <Provider {...props}>{children}</Provider>,
      props.children,
    );

// const SessionProvider: FunctionComponent<ProviderProps> = ({ children }) => <SessionWrapper>{children}</SessionWrapper>;

const AllProviders = composeProviders(SessionWrapper);

interface ProvidersProps {
  children: React.ReactNode;
}
export const Providers: FunctionComponent<ProvidersProps> = ({ children }) => (
  <div>
    <AllProviders>{children}</AllProviders>
  </div>
);
