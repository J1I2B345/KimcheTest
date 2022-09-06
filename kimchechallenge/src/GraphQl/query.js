import { gql } from "apollo-boost";

//query
export const LIST_COUNTRIES = gql`
	{
		countries {
			id
			name
			code
			languages {
				name
			}
			continent {
				name
			}
		}
	}
`;
