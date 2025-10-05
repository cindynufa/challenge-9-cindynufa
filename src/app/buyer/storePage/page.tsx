import Footer from '@/components/buyer/Footer';
import Header from '@/components/buyer/Header';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

export default function storePage() {
  return (
    <>
      {/* Header */}
      <Header />

      <section>
        <div>
            <Avatar>
               <AvatarImage src='/assets/images/img-store-1.png' alt=''/>
               <AvatarFallback></AvatarFallback>
            </Avatar>
        </div>
        <div></div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
