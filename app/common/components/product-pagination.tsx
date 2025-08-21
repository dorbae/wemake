import { useSearchParams } from "react-router";
import { Pagination, PaginationEllipsis, PaginationLink, PaginationPrevious, PaginationContent, PaginationItem, PaginationNext } from "./ui/pagination";

type ProductPaginationProps = {
    totalPages: number;
}


export default function ProductPagination({ totalPages }: ProductPaginationProps) {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page") ?? "1");
    if (isNaN(page) || page < 1 || page > totalPages) {
        throw new Error("Invalid page number");
    }
    const pageSize = 10;
    const pageCount = Math.ceil(totalPages / pageSize);

    return (
        <div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    {page === 1 ? null : <PaginationItem>
                        <PaginationLink href="#">{page - 1}</PaginationLink>
                    </PaginationItem>}
                    <PaginationItem>
                        <PaginationLink href="#" isActive>{page}</PaginationLink>
                    </PaginationItem>
                    {page === totalPages ? null : (
                        <>
                            <PaginationItem>
                                <PaginationLink href="#" >{page + 1}</PaginationLink>
                            </PaginationItem>
                            {page + 1 === totalPages ? null :
                                <>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                </>
                            }
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </>
                    )}
                </PaginationContent>
            </Pagination>
        </div>
    )
} 