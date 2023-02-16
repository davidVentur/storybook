import React from "react";
import "./myLabel.css";

export interface MyLabelProps {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * Tamaño de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalizacion del label
   */
  allCaps?: boolean;
  /**
   * Color de la fuente
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Colores de la fuente
   */
  fontColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  label = "no label",
  size = "normal",
  fontColor = "",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
