import com.mapper.adminmapper;
import com.pojo.admins;
import com.utils.MybatisUtil;
import org.apache.ibatis.session.SqlSession;
import org.junit.jupiter.api.Test;

public class test {
    @Test
    public void test(){
        SqlSession session = MybatisUtil.getSqlSession();
        try {


            adminmapper mapper = session.getMapper(adminmapper.class);



            admins admins =  mapper.getadminbyid(1);

            System.out.println(admins);
        }finally {
            session.close();
        }
     }

}
