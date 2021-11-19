declare namespace svelte.JSX {
    interface HTMLProps<T> {
      ontest?: (event: CustomEvent<{}>) => void;
    }
  }