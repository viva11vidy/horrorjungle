import Link from "next/link";
import BlogPillarSection from "@/components/BlogPillarSection";
import BlogTrendingSection from "@/components/BlogTrendingSection";
import BlogEditorPickSection from "@/components/BlogEditorPickSection";

export default function EssentialHorrorGuides() {
    const array = [1,2,3,4,5,6,7,8]
  return (
    
    <div className="row">
        <div className="col-md-12">
            <div className="breadcrumb-area">
                <ul className="breadcrumb">
                    <li className="sb"><Link href="/">Home</Link></li>
                    <li className="sb"><span>/</span></li>
                    <li className="sb"><span>Articles</span></li>
                </ul>
            </div>
        </div>
    </div>

    
  );
}