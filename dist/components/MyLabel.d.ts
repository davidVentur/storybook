/// <reference types="react" />
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
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, }: MyLabelProps) => JSX.Element;
