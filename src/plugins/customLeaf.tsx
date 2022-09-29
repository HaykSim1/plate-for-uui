import {EText, TText, Value} from "@udecode/plate-core";
import {StyledLeafProps} from "@udecode/plate";

export const CustomLeaf = <V extends Value = Value, N extends TText = EText<V>>(
    props: StyledLeafProps<V, N>
) => {
    console.log(props);
    const { attributes, children, nodeProps } = props;
    return (
        <span {...attributes} {...nodeProps}>
        <b>{children}</b>
    </span>
    );
}