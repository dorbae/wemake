import { Pagination, PaginationEllipsis, PaginationLink, PaginationPrevious, PaginationContent, PaginationItem, PaginationNext } from "./ui/pagination";

type ProductPaginationProps = {
    totalPages: number;
}


export default function ProductPagination({ totalPages }: ProductPaginationProps) {
    return (
        <div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
} 