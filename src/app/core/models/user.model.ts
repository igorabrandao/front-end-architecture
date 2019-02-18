import { Deserializable } from "./deserializable.model";

/**
 * User model class
 */
export class User implements Deserializable {
    // Attributes (just examples)
    id: number;
    name: string;
    email: string;
    password: string;

    // Deserialize interface
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}