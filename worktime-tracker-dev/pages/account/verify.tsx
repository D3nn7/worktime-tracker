import { AppwriteException } from "appwrite";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Alert from "../../components/page/alert";
import Page from "../../components/page/page"
import { appwrite, userState } from "../../store/global";
import { User } from "../../store/types";
import { AppwriteErrorType } from "../../utils/appwriteResponse";

export default function Verify({ userId, secret} : { userId?: string, secret?: string }) {
	const [user] = useRecoilState<User>(userState);
	const [verified, setVerified] = useState<boolean>(false);
	const [alert, setAlert] = useState<string>("");
	const [verificationSend, setVerificationSend] = useState<boolean>(false);

	const router = useRouter();

	useEffect(() => {
		if (userId && secret && !verified) {
			verifyAccount();
		}
	});

	const verifyAccount = async () => {
		try {
			await appwrite.account.updateVerification(userId as string, secret as string);
			setVerified(true);
		} catch(error: any) {
			if (error instanceof AppwriteException) {
				if(error.type === "user_invalid_token") {
					setAlert("The token you using to verify your account is not valid.");
				} else if (error.type === AppwriteErrorType.GENERAL_RATE_LIMIT_EXCEEDED) {
					setAlert("You exceed the rate limit to verify. Please wait 10 minutes and try again.");
				}
			} else {
				setAlert("Something wrent wrong...");
			}
		}
	};

	const sendVerification = async () => {
		await appwrite.account.createVerification(process.env.PROJECT_URL + "/account/verify");
		setVerificationSend(true);

	};

	if(!user?.emailVerification) {
		if (!verificationSend) {
			return (
				<Page isSecurePage={true}>
					{alert && <Alert message={alert} />}
					<h1>One step ahead to track you times.</h1>
					<p>To use you account, you need to verify you email adress first.</p>
					<p>Would you like to send a verification email to <b>{user?.email}</b>?</p>
					<button onClick={sendVerification}>Send Verification Email</button>
				</Page>
			);
		} else {
			return (
				<Page isSecurePage={true}>
					{alert && <Alert message={alert} />}
					<h1>Verification sent</h1>
					<p>We sent a verification mail to <b>{user?.email}</b>.</p>
					<p>Please check you inbox and click the link in the mail we sent you.</p>
				</Page>
			);
		}
	} else if(verified) {
		return (
			<Page isSecurePage={true}>
				{alert && <Alert message={alert} />}
				<h1>Verified 🎉</h1>
				<p>Thank you for verifying your email adress.</p>
				<p>You can now use your account.</p>
				<button onClick={() => router.push("/account/overview")}>Account</button>
			</Page>
		);
	} else {
		router.push("/account/overview");
	}
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const query = context.query;
	const userId = query.userId;
	const secret = query.secret;

	if (userId && secret) {
		return {
			props: {
				userId: userId,
				secret: secret
			}
		}
	} else {
		return {
			props: {}
		}
	}
}