import { gql } from "apollo-boost";

//query
export const LIST_COUNTRIES = gql`
	{
		countries {
			name
			code
			emoji
			capital
			currency
			languages {
				name
			}
			continent {
				name
			}
		}
	}
`;
