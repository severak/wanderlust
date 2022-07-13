import {Feature} from "protomaps/src/tilecache";
import {AttrOption, TextAttr, TextAttrOptions} from "protomaps/src/attribute";

// TODO - implement this ugly hack in better way
export class RewriteableTextAttr extends TextAttr {
    label_props: AttrOption<string[]>;
    textTransform?: AttrOption<string>;


    public get(z: number, f: Feature): string | undefined {
        let retval: string | undefined;

        let label_props: string[];
        if (typeof this.label_props == "function") {
            retval = this.label_props(z, f);
        } else {
            label_props = this.label_props;
            for (let property of label_props) {
                if (
                    f.props.hasOwnProperty(property) &&
                    typeof f.props[property] === "string"
                ) {
                    retval = f.props[property] as string;
                    break;
                }
            }
        }

        let transform;
        if (typeof this.textTransform === "function") {
            transform = this.textTransform(z, f);
        } else {
            transform = this.textTransform;
        }
        if (retval && transform === "uppercase") retval = retval.toUpperCase();
        else if (retval && transform === "lowercase") retval = retval.toLowerCase();
        else if (retval && transform === "capitalize") {
            const wordsArray = retval.toLowerCase().split(" ");
            const capsArray = wordsArray.map((word: string) => {
                return word[0].toUpperCase() + word.slice(1);
            });
            retval = capsArray.join(" ");
        }
        return retval;
    }
}
