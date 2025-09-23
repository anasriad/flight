import { Users } from "../db/models/Users";
import { oAuthSignInService, oAuthSignUpService } from "../services/User.services";

jest.mock("../db/models/Users");

describe("User credential with oAuth", () => {

    const fakeUser = {

        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        picture: "myPictureLink",
        providerId: process.env.GOOGLE_CLIENT_ID,
        provider: "google",

    };

    beforeEach(() => {

        jest.clearAllMocks();

        (Users.findOne as jest.Mock).mockResolvedValue(fakeUser);

    });

    it("should find user by email", async () => {

        const user = await oAuthSignInService({ email: "johndoe@gmail.com" });

        expect(user).toEqual(fakeUser);

        expect(Users.findOne).toHaveBeenCalledWith({ email: "johndoe@gmail.com" });

    });

    it('should create a user by encrypted token', async () => {

        const user = await oAuthSignUpService({

            given_name: "John",
            family_name: "Doe",
            email: "johndoe@gmail.com",
            picture: "myPictureLink",

        });

        expect(user).toEqual({
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@gmail.com",
            picture: "myPictureLink",
            
        })

    })

});
