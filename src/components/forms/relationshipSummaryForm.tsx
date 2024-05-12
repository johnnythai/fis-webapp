import { useRef } from "react";
import { fetchApi } from "../../api/fetchApi";


interface Authentication {
	fisToken: string,
	horizonToken: string	
} 

const RelationshipSummaryFields = (props: any) => {
	return(
		<>
			<label>
				Customer ID: <input 
					name="customerId" 
					pattern="[0-9]*" 
					maxLength={14} 
					ref={props.customerIdRef} />
			</label>
			<br />
			<label>
				Account Number: <input 
					name="tin" 
					pattern="[0-9]*" 
					maxLength={20} 
					ref={props.accountNumberRef} />
			</label>
		</>
	);
};

const RelationshipSummaryForm = (props: { authentication: Authentication }) => {
	const customerIdRef = useRef<HTMLInputElement>();
	const accountNumberRef = useRef<HTMLInputElement>();
	const horizonToken = props.authentication?.horizonToken;
	const fisToken = props.authentication?.fisToken;

	const fetchCustomerId = async () => {
		const applicationCode = 'Z9';
		const accountNumber = accountNumberRef.current?.value;
	
		const fetchOptions = {
			headers: {
				horizonToken: horizonToken,	
				fisToken: fisToken,
			},
		};

		try {
			const customerInfo = await fetchApi(
				`/api/horizon/accounts/${applicationCode}/${accountNumber}`, 
				fetchOptions
			);
			const customerId = await customerInfo.accountInformation.customerKey;
			if (customerId === undefined) {
				throw new Error('Customer not found.');
			}

			return customerId;
		} catch (error) {
			alert(error);
		}
	};
	
	const fetchCustomerRelationshipSummary = async () => {
		let customerId;
		customerIdRef.current?.value 
			? customerId = customerIdRef.current.value 
			: customerId = await fetchCustomerId();

		if (customerId instanceof Error) {
			return
		}

		const fetchOptions = {
			headers: {
				horizonToken: horizonToken,
				fisToken: fisToken,
			},
		};
		
		const customerRelationshipSummary = await fetchApi(
			`/api/horizon/customers/${customerId}/relationship-summary`, 
			fetchOptions
		);
		console.log('CUSTOMER RELATIONSHIP SUMMARY: ', customerRelationshipSummary);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		if (!accountNumberRef.current?.value && !customerIdRef.current?.value) {
			alert('At least one field is required.');
		} 

		await fetchCustomerRelationshipSummary();
	};

	return(
		<form method="post" onSubmit={handleSubmit}>
			<h4>Customer Relationship Summary</h4>
			<RelationshipSummaryFields 
				accountNumberRef={accountNumberRef} customerIdRef={customerIdRef} />
			<br />
			<button type="reset">Reset</button>
			<button type="submit">Submit</button>
		</form>
	);
};

export default RelationshipSummaryForm;
