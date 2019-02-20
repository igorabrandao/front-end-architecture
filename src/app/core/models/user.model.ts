import { Deserializable } from "./deserializable.model";

/**
 * User model class
 */
export class User implements Deserializable {
    // Attributes (just examples)
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    access_token: string;

    // Deserialize interface
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}