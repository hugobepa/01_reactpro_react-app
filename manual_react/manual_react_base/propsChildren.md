import React, { ReactNode, useState } from "react";

interface Props extends React.PropsWithChildren {
initialValue: number;
children: ReactNode | ReactNode[];
}

export const Counter = ({ initialValue, children }: Props) => {
