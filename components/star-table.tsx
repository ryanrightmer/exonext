import { BasicSearchResult } from '../types';
import Link from 'next/link';

type Props = {
  entries: BasicSearchResult[];
}

const StarTable = ({ entries }: Props) => {
  return (
    <table className="starsInfoTable">
      <tr>
        <th></th>
        <th>Distance in Parsecs</th>
        <th>Star Name</th>
        <th>Stellar Class</th>
        <th># of Planets</th>
        <th></th>
      </tr>
      {
        entries ? entries.map((x, index) =>
          <tr key={x.pl_name} className="searchEntry">
            <td>{index + 1}.</td>
            <td>{x.st_dist} Parsecs</td>
            <td>{x.pl_hostname}</td>
            <td>{x.st_spstr}</td>
            <td>{x.pl_pnum}</td>
            <td>
              <Link href={`/stellar-system?name=${x.pl_hostname}`}>
                <a>Details</a>
              </Link>
            </td>
          </tr>) : null
      }
    </table>
  )
}

export default StarTable;