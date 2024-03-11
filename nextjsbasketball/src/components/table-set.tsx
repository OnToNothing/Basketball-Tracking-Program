
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

export function TableSet() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Player</TableHead>
          <TableHead>Attempts</TableHead>
          <TableHead>Makes</TableHead>
          <TableHead>Misses</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="flex items-center space-x-2">
            <img
              alt="Player avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="font-medium">Alex Johnson</span>
          </TableCell>
          <TableCell>
            <Input className="w-[100px]" placeholder="Enter text" type="text" />
          </TableCell>
          <TableCell>
            <Input className="w-[60px]" placeholder="Enter text" type="text" />
          </TableCell>
          <TableCell>
            <Input className="w-[60px]" placeholder="Enter text" type="text" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="flex items-center space-x-2">
            <img
              alt="Player avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="font-medium">Ella Smith</span>
          </TableCell>
          <TableCell>
            <Input className="w-[100px]" placeholder="Enter text" type="text" />
          </TableCell>
          <TableCell>
            <Input className="w-[60px]" placeholder="Enter text" type="text" />
          </TableCell>
          <TableCell>
            <Input className="w-[60px]" placeholder="Enter text" type="text" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="flex items-center space-x-2">
            <img
              alt="Player avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="font-medium">Noah Williams</span>
          </TableCell>
          <TableCell>
            <Input className="w-[100px]" placeholder="Enter text" type="text" />
          </TableCell>
          <TableCell>
            <Input className="w-[60px]" placeholder="Enter text" type="text" />
          </TableCell>
          <TableCell>
            <Input className="w-[60px]" placeholder="Enter text" type="text" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="flex items-center space-x-2">
            <img
              alt="Player avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="font-medium">Ava Brown</span>
          </TableCell>
          <TableCell>
            <Input className="w-[100px]" placeholder="Enter text" type="text" />
          </TableCell>
          <TableCell>
            <Input className="w-[60px]" placeholder="Enter text" type="text" />
          </TableCell>
          <TableCell>
            <Input className="w-[60px]" placeholder="Enter text" type="text" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="flex items-center space-x-2">
            <img
              alt="Player avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="font-medium">James Johnson</span>
          </TableCell>
          <TableCell>
            <Input className="w-[100px]" placeholder="Enter text" type="text" />
          </TableCell>
          <TableCell>
            <Input className="w-[60px]" placeholder="Enter text" type="text" />
          </TableCell>
          <TableCell>
            <Input className="w-[60px]" placeholder="Enter text" type="text" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
